## K3s -5   less  than k8s

轻量级Kubernetes发行版。易于安装，内存减半，所有二进制文件不到40mb。

使用于：

- 边缘计算-Edge
- 物联网-loT
- CI
- ARM

### 1. What is this?

k3s是完全兼容的Kubernetes发行版，有以下更改：

- 移除过时的功能、Alpha功能、非默认功能，这些功能在大多数Kubernetes集群中已不可用。
- 删除内置插件(比如云供应商插件和存储插件)，可用外部插件程序替换。
- 添加SQLite3作为默认的数据存储。etcd3仍然可用，但并非默认项。
- 包含在一个简单的启动程序当中，可以处理复杂的TLS和其他选项。
- 几乎没有操作系统依赖性（仅需要健全的内核和cgroup挂载）。k3s软件包所需的依赖：
  - containerd
  - Flannel
  - CoreDNS
  - CNI
  - 主机系统服务 (iptables, socat, etc)

## 离线安装

### 1、准备镜像目录

------

在能够连接外网的机器中，获取k3s 的git下获取离线安装镜像包

```sh
# 获取k3s离线镜像
wget https://github.com/rancher/k3s/releases/download/v1.18.2%2Bk3s1/k3s-airgap-images-amd64.tar
# 创建镜像目录
mkdir -p /var/lib/rancher/k3s/agent/images/
# 拷贝下载好的镜像到创建好的镜像目录
cp k3s-airgap-images-amd64.tar /var/lib/rancher/k3s/agent/images/
```

> **注意：** 这里我在完全离线的环境下安装环境下，还是会出下载外网的镜像，所以我提前将离线镜像导入到docker中

```sh
# 手动导入k3s镜像
docker load < k3s-airgap-images-amd64.tar
```



### 2、创建镜像仓库YAML文件

------

在`/etc/rancher/k3s/registries.yaml`创建registries.yaml文件，registries.yaml文件应如下所示：

```yaml
mirrors:
  "microid.docker.com:5000":
    endpoint:
      - "https://microid.docker.com:5000"
# 我这里的docker私有仓库没有配置tls认证，所以不需要配置证书
```

### 3、安装k3s

通过[发行页面](https://github.com/rancher/k3s/releases)下载K3s二进制文件和离线镜像包。还可以在`https://get.k3s.io`上获取K3s安装脚本。

将二进制文件放在每个节点的`/usr/local/bin`，将安装脚本放置在每个节点上的任意位置，并将其命名为`install.sh`。

```sh
# 下载k3s二进制文件
wget https://github.com/rancher/k3s/releases/download/v1.18.2%2Bk3s1/k3s
# 获取安装脚本，由于网络原因安装脚本可能下载会失败，这里将下载好的脚本内容粘贴在该处
#!/bin/sh
set -e

# Usage:
#   curl ... | ENV_VAR=... sh -
#       or
#   ENV_VAR=... ./install.sh
#
# Example:
#   Installing a server without traefik:
#     curl ... | INSTALL_K3S_EXEC="--no-deploy=traefik" sh -
#   Installing an agent to point at a server:
#     curl ... | K3S_TOKEN=xxx K3S_URL=https://server-url:6443 sh -
#
# Environment variables:
#   - K3S_*
#     Environment variables which begin with K3S_ will be preserved for the
#     systemd service to use. Setting K3S_URL without explicitly setting
#     a systemd exec command will default the command to "agent", and we
#     enforce that K3S_TOKEN or K3S_CLUSTER_SECRET is also set.
#
#   - INSTALL_K3S_SKIP_DOWNLOAD
#     If set to true will not download k3s hash or binary.
#
#   - INSTALL_K3S_SYMLINK
#     If set to 'skip' will not create symlinks, 'force' will overwrite,
#     default will symlink if command does not exist in path.
#
#   - INSTALL_K3S_SKIP_ENABLE
#     If set to true will not enable or start k3s service.
#
#   - INSTALL_K3S_SKIP_START
#     If set to true will not start k3s service.
#
#   - INSTALL_K3S_VERSION
#     Version of k3s to download from github. Will attempt to download from the
#     stable channel if not specified.
#
#   - INSTALL_K3S_COMMIT
#     Commit of k3s to download from temporary cloud storage.
#     * (for developer & QA use)
#
#   - INSTALL_K3S_BIN_DIR
#     Directory to install k3s binary, links, and uninstall script to, or use
#     /usr/local/bin as the default
#
#   - INSTALL_K3S_BIN_DIR_READ_ONLY
#     If set to true will not write files to INSTALL_K3S_BIN_DIR, forces
#     setting INSTALL_K3S_SKIP_DOWNLOAD=true
#
#   - INSTALL_K3S_SYSTEMD_DIR
#     Directory to install systemd service and environment files to, or use
#     /etc/systemd/system as the default
#
#   - INSTALL_K3S_EXEC or script arguments
#     Command with flags to use for launching k3s in the systemd service, if
#     the command is not specified will default to "agent" if K3S_URL is set
#     or "server" if not. The final systemd command resolves to a combination
#     of EXEC and script args ($@).
#
#     The following commands result in the same behavior:
#       curl ... | INSTALL_K3S_EXEC="--no-deploy=traefik" sh -s -
#       curl ... | INSTALL_K3S_EXEC="server --no-deploy=traefik" sh -s -
#       curl ... | INSTALL_K3S_EXEC="server" sh -s - --no-deploy=traefik
#       curl ... | sh -s - server --no-deploy=traefik
#       curl ... | sh -s - --no-deploy=traefik
#
#   - INSTALL_K3S_NAME
#     Name of systemd service to create, will default from the k3s exec command
#     if not specified. If specified the name will be prefixed with 'k3s-'.
#
#   - INSTALL_K3S_TYPE
#     Type of systemd service to create, will default from the k3s exec command
#     if not specified.
#
#   - INSTALL_K3S_SELINUX_WARN
#     If set to true will continue if k3s-selinux policy is not found.
#
#   - INSTALL_K3S_CHANNEL_URL
#     Channel URL for fetching k3s download URL.
#     Defaults to 'https://update.k3s.io/v1-release/channels'.
#
#   - INSTALL_K3S_CHANNEL
#     Channel to use for fetching k3s download URL.
#     Defaults to 'stable'.

GITHUB_URL=https://github.com/rancher/k3s/releases
STORAGE_URL=https://storage.googleapis.com/k3s-ci-builds
DOWNLOADER=

# --- helper functions for logs ---
info()
{
    echo '[INFO] ' "$@"
}
warn()
{
    echo '[WARN] ' "$@" >&2
}
fatal()
{
    echo '[ERROR] ' "$@" >&2
    exit 1
}

# --- fatal if no systemd or openrc ---
verify_system() {
    if [ -x /sbin/openrc-run ]; then
        HAS_OPENRC=true
        return
    fi
    if [ -d /run/systemd ]; then
        HAS_SYSTEMD=true
        return
    fi
    fatal 'Can not find systemd or openrc to use as a process supervisor for k3s'
}

# --- add quotes to command arguments ---
quote() {
    for arg in "$@"; do
        printf '%s\n' "$arg" | sed "s/'/'\\\\''/g;1s/^/'/;\$s/\$/'/"
    done
}

# --- add indentation and trailing slash to quoted args ---
quote_indent() {
    printf ' \\\n'
    for arg in "$@"; do
        printf '\t%s \\\n' "$(quote "$arg")"
    done
}

# --- escape most punctuation characters, except quotes, forward slash, and space ---
escape() {
    printf '%s' "$@" | sed -e 's/\([][!#$%&()*;<=>?\_`{|}]\)/\\\1/g;'
}

# --- escape double quotes ---
escape_dq() {
    printf '%s' "$@" | sed -e 's/"/\\"/g'
}

# --- define needed environment variables ---
setup_env() {
    # --- use command args if passed or create default ---
    case "$1" in
        # --- if we only have flags discover if command should be server or agent ---
        (-*|"")
            if [ -z "${K3S_URL}" ]; then
                CMD_K3S=server
            else
                if [ -z "${K3S_TOKEN}" ] && [ -z "${K3S_CLUSTER_SECRET}" ]; then
                    fatal "Defaulted k3s exec command to 'agent' because K3S_URL is defined, but K3S_TOKEN or K3S_CLUSTER_SECRET is not defined."
                fi
                CMD_K3S=agent
            fi
        ;;
        # --- command is provided ---
        (*)
            CMD_K3S=$1
            shift
        ;;
    esac
    CMD_K3S_EXEC="${CMD_K3S}$(quote_indent "$@")"

    # --- use systemd name if defined or create default ---
    if [ -n "${INSTALL_K3S_NAME}" ]; then
        SYSTEM_NAME=k3s-${INSTALL_K3S_NAME}
    else
        if [ "${CMD_K3S}" = server ]; then
            SYSTEM_NAME=k3s
        else
            SYSTEM_NAME=k3s-${CMD_K3S}
        fi
    fi

    # --- check for invalid characters in system name ---
    valid_chars=$(printf '%s' "${SYSTEM_NAME}" | sed -e 's/[][!#$%&()*;<=>?\_`{|}/[:space:]]/^/g;' )
    if [ "${SYSTEM_NAME}" != "${valid_chars}"  ]; then
        invalid_chars=$(printf '%s' "${valid_chars}" | sed -e 's/[^^]/ /g')
        fatal "Invalid characters for system name:
            ${SYSTEM_NAME}
            ${invalid_chars}"
    fi

    # --- use sudo if we are not already root ---
    SUDO=sudo
    if [ $(id -u) -eq 0 ]; then
        SUDO=
    fi

    # --- use systemd type if defined or create default ---
    if [ -n "${INSTALL_K3S_TYPE}" ]; then
        SYSTEMD_TYPE=${INSTALL_K3S_TYPE}
    else
        if [ "${CMD_K3S}" = server ]; then
            SYSTEMD_TYPE=notify
        else
            SYSTEMD_TYPE=exec
        fi
    fi

    # --- use binary install directory if defined or create default ---
    if [ -n "${INSTALL_K3S_BIN_DIR}" ]; then
        BIN_DIR=${INSTALL_K3S_BIN_DIR}
    else
        BIN_DIR=/usr/local/bin
    fi

    # --- use systemd directory if defined or create default ---
    if [ -n "${INSTALL_K3S_SYSTEMD_DIR}" ]; then
        SYSTEMD_DIR="${INSTALL_K3S_SYSTEMD_DIR}"
    else
        SYSTEMD_DIR=/etc/systemd/system
    fi

    # --- set related files from system name ---
    SERVICE_K3S=${SYSTEM_NAME}.service
    UNINSTALL_K3S_SH=${UNINSTALL_K3S_SH:-${BIN_DIR}/${SYSTEM_NAME}-uninstall.sh}
    KILLALL_K3S_SH=${KILLALL_K3S_SH:-${BIN_DIR}/k3s-killall.sh}

    # --- use service or environment location depending on systemd/openrc ---
    if [ "${HAS_SYSTEMD}" = true ]; then
        FILE_K3S_SERVICE=${SYSTEMD_DIR}/${SERVICE_K3S}
        FILE_K3S_ENV=${SYSTEMD_DIR}/${SERVICE_K3S}.env
    elif [ "${HAS_OPENRC}" = true ]; then
        $SUDO mkdir -p /etc/rancher/k3s
        FILE_K3S_SERVICE=/etc/init.d/${SYSTEM_NAME}
        FILE_K3S_ENV=/etc/rancher/k3s/${SYSTEM_NAME}.env
    fi

    # --- get hash of config & exec for currently installed k3s ---
    PRE_INSTALL_HASHES=$(get_installed_hashes)

    # --- if bin directory is read only skip download ---
    if [ "${INSTALL_K3S_BIN_DIR_READ_ONLY}" = true ]; then
        INSTALL_K3S_SKIP_DOWNLOAD=true
    fi

    # --- setup channel values
    INSTALL_K3S_CHANNEL_URL=${INSTALL_K3S_CHANNEL_URL:-'https://update.k3s.io/v1-release/channels'}
    INSTALL_K3S_CHANNEL=${INSTALL_K3S_CHANNEL:-'stable'}
}

# --- check if skip download environment variable set ---
can_skip_download() {
    if [ "${INSTALL_K3S_SKIP_DOWNLOAD}" != true ]; then
        return 1
    fi
}

# --- verify an executabe k3s binary is installed ---
verify_k3s_is_executable() {
    if [ ! -x ${BIN_DIR}/k3s ]; then
        fatal "Executable k3s binary not found at ${BIN_DIR}/k3s"
    fi
}

# --- set arch and suffix, fatal if architecture not supported ---
setup_verify_arch() {
    if [ -z "$ARCH" ]; then
        ARCH=$(uname -m)
    fi
    case $ARCH in
        amd64)
            ARCH=amd64
            SUFFIX=
            ;;
        x86_64)
            ARCH=amd64
            SUFFIX=
            ;;
        arm64)
            ARCH=arm64
            SUFFIX=-${ARCH}
            ;;
        aarch64)
            ARCH=arm64
            SUFFIX=-${ARCH}
            ;;
        arm*)
            ARCH=arm
            SUFFIX=-${ARCH}hf
            ;;
        *)
            fatal "Unsupported architecture $ARCH"
    esac
}

# --- verify existence of network downloader executable ---
verify_downloader() {
    # Return failure if it doesn't exist or is no executable
    [ -x "$(which $1)" ] || return 1

    # Set verified executable as our downloader program and return success
    DOWNLOADER=$1
    return 0
}

# --- create tempory directory and cleanup when done ---
setup_tmp() {
    TMP_DIR=$(mktemp -d -t k3s-install.XXXXXXXXXX)
    TMP_HASH=${TMP_DIR}/k3s.hash
    TMP_BIN=${TMP_DIR}/k3s.bin
    cleanup() {
        code=$?
        set +e
        trap - EXIT
        rm -rf ${TMP_DIR}
        exit $code
    }
    trap cleanup INT EXIT
}

# --- use desired k3s version if defined or find version from channel ---
get_release_version() {
    if [ -n "${INSTALL_K3S_COMMIT}" ]; then
        VERSION_K3S="commit ${INSTALL_K3S_COMMIT}"
    elif [ -n "${INSTALL_K3S_VERSION}" ]; then
        VERSION_K3S=${INSTALL_K3S_VERSION}
    else
        info "Finding release for channel ${INSTALL_K3S_CHANNEL}"
        version_url="${INSTALL_K3S_CHANNEL_URL}/${INSTALL_K3S_CHANNEL}"
        case $DOWNLOADER in
            curl)
                VERSION_K3S=$(curl -w '%{url_effective}' -L -s -S ${version_url} -o /dev/null | sed -e 's|.*/||')
                ;;
            wget)
                VERSION_K3S=$(wget -SqO /dev/null ${version_url} 2>&1 | grep -i Location | sed -e 's|.*/||')
                ;;
            *)
                fatal "Incorrect downloader executable '$DOWNLOADER'"
                ;;
        esac
    fi
    info "Using ${VERSION_K3S} as release"
}

# --- download from github url ---
download() {
    [ $# -eq 2 ] || fatal 'download needs exactly 2 arguments'

    case $DOWNLOADER in
        curl)
            curl -o $1 -sfL $2
            ;;
        wget)
            wget -qO $1 $2
            ;;
        *)
            fatal "Incorrect executable '$DOWNLOADER'"
            ;;
    esac

    # Abort if download command failed
    [ $? -eq 0 ] || fatal 'Download failed'
}

# --- download hash from github url ---
download_hash() {
    if [ -n "${INSTALL_K3S_COMMIT}" ]; then
        HASH_URL=${STORAGE_URL}/k3s${SUFFIX}-${INSTALL_K3S_COMMIT}.sha256sum
    else
        HASH_URL=${GITHUB_URL}/download/${VERSION_K3S}/sha256sum-${ARCH}.txt
    fi
    info "Downloading hash ${HASH_URL}"
    download ${TMP_HASH} ${HASH_URL}
    HASH_EXPECTED=$(grep " k3s${SUFFIX}$" ${TMP_HASH})
    HASH_EXPECTED=${HASH_EXPECTED%%[[:blank:]]*}
}

# --- check hash against installed version ---
installed_hash_matches() {
    if [ -x ${BIN_DIR}/k3s ]; then
        HASH_INSTALLED=$(sha256sum ${BIN_DIR}/k3s)
        HASH_INSTALLED=${HASH_INSTALLED%%[[:blank:]]*}
        if [ "${HASH_EXPECTED}" = "${HASH_INSTALLED}" ]; then
            return
        fi
    fi
    return 1
}

# --- download binary from github url ---
download_binary() {
    if [ -n "${INSTALL_K3S_COMMIT}" ]; then
        BIN_URL=${STORAGE_URL}/k3s${SUFFIX}-${INSTALL_K3S_COMMIT}
    else
        BIN_URL=${GITHUB_URL}/download/${VERSION_K3S}/k3s${SUFFIX}
    fi
    info "Downloading binary ${BIN_URL}"
    download ${TMP_BIN} ${BIN_URL}
}

# --- verify downloaded binary hash ---
verify_binary() {
    info "Verifying binary download"
    HASH_BIN=$(sha256sum ${TMP_BIN})
    HASH_BIN=${HASH_BIN%%[[:blank:]]*}
    if [ "${HASH_EXPECTED}" != "${HASH_BIN}" ]; then
        fatal "Download sha256 does not match ${HASH_EXPECTED}, got ${HASH_BIN}"
    fi
}

# --- setup permissions and move binary to system directory ---
setup_binary() {
    chmod 755 ${TMP_BIN}
    info "Installing k3s to ${BIN_DIR}/k3s"
    $SUDO chown root:root ${TMP_BIN}
    $SUDO mv -f ${TMP_BIN} ${BIN_DIR}/k3s
}

# --- setup selinux policy ---
setup_selinux() {
    policy_hint="please install:
    yum install -y container-selinux selinux-policy-base
    rpm -i https://rpm.rancher.io/k3s-selinux-0.1.1-rc1.el7.noarch.rpm
"
    policy_error=fatal
    if [ "$INSTALL_K3S_SELINUX_WARN" = true ]; then
        policy_error=warn
    fi

    if ! $SUDO chcon -u system_u -r object_r -t container_runtime_exec_t ${BIN_DIR}/k3s >/dev/null 2>&1; then
        if $SUDO grep '^\s*SELINUX=enforcing' /etc/selinux/config >/dev/null 2>&1; then
            $policy_error "Failed to apply container_runtime_exec_t to ${BIN_DIR}/k3s, ${policy_hint}"
        fi
    else
        if [ ! -f /usr/share/selinux/packages/k3s.pp ]; then
            $policy_error "Failed to find the k3s-selinux policy, ${policy_hint}"
        fi
    fi
}

# --- download and verify k3s ---
download_and_verify() {
    if can_skip_download; then
       info 'Skipping k3s download and verify'
       verify_k3s_is_executable
       return
    fi

    setup_verify_arch
    verify_downloader curl || verify_downloader wget || fatal 'Can not find curl or wget for downloading files'
    setup_tmp
    get_release_version
    download_hash

    if installed_hash_matches; then
        info 'Skipping binary downloaded, installed k3s matches hash'
        return
    fi

    download_binary
    verify_binary
    setup_binary
}

# --- add additional utility links ---
create_symlinks() {
    [ "${INSTALL_K3S_BIN_DIR_READ_ONLY}" = true ] && return
    [ "${INSTALL_K3S_SYMLINK}" = skip ] && return

    for cmd in kubectl crictl ctr; do
        if [ ! -e ${BIN_DIR}/${cmd} ] || [ "${INSTALL_K3S_SYMLINK}" = force ]; then
            which_cmd=$(which ${cmd} 2>/dev/null || true)
            if [ -z "${which_cmd}" ] || [ "${INSTALL_K3S_SYMLINK}" = force ]; then
                info "Creating ${BIN_DIR}/${cmd} symlink to k3s"
                $SUDO ln -sf k3s ${BIN_DIR}/${cmd}
            else
                info "Skipping ${BIN_DIR}/${cmd} symlink to k3s, command exists in PATH at ${which_cmd}"
            fi
        else
            info "Skipping ${BIN_DIR}/${cmd} symlink to k3s, already exists"
        fi
    done
}

# --- create killall script ---
create_killall() {
    [ "${INSTALL_K3S_BIN_DIR_READ_ONLY}" = true ] && return
    info "Creating killall script ${KILLALL_K3S_SH}"
    $SUDO tee ${KILLALL_K3S_SH} >/dev/null << \EOF
#!/bin/sh
[ $(id -u) -eq 0 ] || exec sudo $0 $@

for bin in /var/lib/rancher/k3s/data/**/bin/; do
    [ -d $bin ] && export PATH=$PATH:$bin:$bin/aux
done

set -x

for service in /etc/systemd/system/k3s*.service; do
    [ -s $service ] && systemctl stop $(basename $service)
done

for service in /etc/init.d/k3s*; do
    [ -x $service ] && $service stop
done

pschildren() {
    ps -e -o ppid= -o pid= | \
    sed -e 's/^\s*//g; s/\s\s*/\t/g;' | \
    grep -w "^$1" | \
    cut -f2
}

pstree() {
    for pid in $@; do
        echo $pid
        for child in $(pschildren $pid); do
            pstree $child
        done
    done
}

killtree() {
    kill -9 $(
        { set +x; } 2>/dev/null;
        pstree $@;
        set -x;
    ) 2>/dev/null
}

getshims() {
    ps -e -o pid= -o args= | sed -e 's/^ *//; s/\s\s*/\t/;' | grep -w 'k3s/data/[^/]*/bin/containerd-shim' | cut -f1
}

killtree $({ set +x; } 2>/dev/null; getshims; set -x)

do_unmount() {
    { set +x; } 2>/dev/null
    MOUNTS=
    while read ignore mount ignore; do
        MOUNTS="$mount\n$MOUNTS"
    done </proc/self/mounts
    MOUNTS=$(printf $MOUNTS | grep "^$1" | sort -r)
    if [ -n "${MOUNTS}" ]; then
        set -x
        umount ${MOUNTS}
    else
        set -x
    fi
}

do_unmount '/run/k3s'
do_unmount '/var/lib/rancher/k3s'
do_unmount '/var/lib/kubelet/pods'
do_unmount '/run/netns/cni-'

# Delete network interface(s) that match 'master cni0'
ip link show 2>/dev/null | grep 'master cni0' | while read ignore iface ignore; do
    iface=${iface%%@*}
    [ -z "$iface" ] || ip link delete $iface
done
ip link delete cni0
ip link delete flannel.1
rm -rf /var/lib/cni/
iptables-save | grep -v KUBE- | grep -v CNI- | iptables-restore
EOF
    $SUDO chmod 755 ${KILLALL_K3S_SH}
    $SUDO chown root:root ${KILLALL_K3S_SH}
}

# --- create uninstall script ---
create_uninstall() {
    [ "${INSTALL_K3S_BIN_DIR_READ_ONLY}" = true ] && return
    info "Creating uninstall script ${UNINSTALL_K3S_SH}"
    $SUDO tee ${UNINSTALL_K3S_SH} >/dev/null << EOF
#!/bin/sh
set -x
[ \$(id -u) -eq 0 ] || exec sudo \$0 \$@

${KILLALL_K3S_SH}

if which systemctl; then
    systemctl disable ${SYSTEM_NAME}
    systemctl reset-failed ${SYSTEM_NAME}
    systemctl daemon-reload
fi
if which rc-update; then
    rc-update delete ${SYSTEM_NAME} default
fi

rm -f ${FILE_K3S_SERVICE}
rm -f ${FILE_K3S_ENV}

remove_uninstall() {
    rm -f ${UNINSTALL_K3S_SH}
}
trap remove_uninstall EXIT

if (ls ${SYSTEMD_DIR}/k3s*.service || ls /etc/init.d/k3s*) >/dev/null 2>&1; then
    set +x; echo 'Additional k3s services installed, skipping uninstall of k3s'; set -x
    exit
fi

for cmd in kubectl crictl ctr; do
    if [ -L ${BIN_DIR}/\$cmd ]; then
        rm -f ${BIN_DIR}/\$cmd
    fi
done

rm -rf /etc/rancher/k3s
rm -rf /var/lib/rancher/k3s
rm -rf /var/lib/kubelet
rm -f ${BIN_DIR}/k3s
rm -f ${KILLALL_K3S_SH}
EOF
    $SUDO chmod 755 ${UNINSTALL_K3S_SH}
    $SUDO chown root:root ${UNINSTALL_K3S_SH}
}

# --- disable current service if loaded --
systemd_disable() {
    $SUDO rm -f /etc/systemd/system/${SERVICE_K3S} || true
    $SUDO rm -f /etc/systemd/system/${SERVICE_K3S}.env || true
    $SUDO systemctl disable ${SYSTEM_NAME} >/dev/null 2>&1 || true
}

# --- capture current env and create file containing k3s_ variables ---
create_env_file() {
    info "env: Creating environment file ${FILE_K3S_ENV}"
    UMASK=$(umask)
    umask 0377
    env | grep '^K3S_' | $SUDO tee ${FILE_K3S_ENV} >/dev/null
    env | egrep -i '^(NO|HTTP|HTTPS)_PROXY' | $SUDO tee -a ${FILE_K3S_ENV} >/dev/null
    umask $UMASK
}

# --- write systemd service file ---
create_systemd_service_file() {
    info "systemd: Creating service file ${FILE_K3S_SERVICE}"
    $SUDO tee ${FILE_K3S_SERVICE} >/dev/null << EOF
[Unit]
Description=Lightweight Kubernetes
Documentation=https://k3s.io
Wants=network-online.target

[Install]
WantedBy=multi-user.target

[Service]
Type=${SYSTEMD_TYPE}
EnvironmentFile=${FILE_K3S_ENV}
KillMode=process
Delegate=yes
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
TasksMax=infinity
TimeoutStartSec=0
Restart=always
RestartSec=5s
ExecStartPre=-/sbin/modprobe br_netfilter
ExecStartPre=-/sbin/modprobe overlay
ExecStart=${BIN_DIR}/k3s \\
    ${CMD_K3S_EXEC}

EOF
}

# --- write openrc service file ---
create_openrc_service_file() {
    LOG_FILE=/var/log/${SYSTEM_NAME}.log

    info "openrc: Creating service file ${FILE_K3S_SERVICE}"
    $SUDO tee ${FILE_K3S_SERVICE} >/dev/null << EOF
#!/sbin/openrc-run

depend() {
    after network-online
    want cgroups
}

start_pre() {
    rm -f /tmp/k3s.*
}

supervisor=supervise-daemon
name=${SYSTEM_NAME}
command="${BIN_DIR}/k3s"
command_args="$(escape_dq "${CMD_K3S_EXEC}")
    >>${LOG_FILE} 2>&1"

output_log=${LOG_FILE}
error_log=${LOG_FILE}

pidfile="/var/run/${SYSTEM_NAME}.pid"
respawn_delay=5

set -o allexport
if [ -f /etc/environment ]; then source /etc/environment; fi
if [ -f ${FILE_K3S_ENV} ]; then source ${FILE_K3S_ENV}; fi
set +o allexport
EOF
    $SUDO chmod 0755 ${FILE_K3S_SERVICE}

    $SUDO tee /etc/logrotate.d/${SYSTEM_NAME} >/dev/null << EOF
${LOG_FILE} {
	missingok
	notifempty
	copytruncate
}
EOF
}

# --- write systemd or openrc service file ---
create_service_file() {
    [ "${HAS_SYSTEMD}" = true ] && create_systemd_service_file
    [ "${HAS_OPENRC}" = true ] && create_openrc_service_file
    return 0
}

# --- get hashes of the current k3s bin and service files
get_installed_hashes() {
    $SUDO sha256sum ${BIN_DIR}/k3s ${FILE_K3S_SERVICE} ${FILE_K3S_ENV} 2>&1 || true
}

# --- enable and start systemd service ---
systemd_enable() {
    info "systemd: Enabling ${SYSTEM_NAME} unit"
    $SUDO systemctl enable ${FILE_K3S_SERVICE} >/dev/null
    $SUDO systemctl daemon-reload >/dev/null
}

systemd_start() {
    info "systemd: Starting ${SYSTEM_NAME}"
    $SUDO systemctl restart ${SYSTEM_NAME}
}

# --- enable and start openrc service ---
openrc_enable() {
    info "openrc: Enabling ${SYSTEM_NAME} service for default runlevel"
    $SUDO rc-update add ${SYSTEM_NAME} default >/dev/null
}

openrc_start() {
    info "openrc: Starting ${SYSTEM_NAME}"
    $SUDO ${FILE_K3S_SERVICE} restart
}

# --- startup systemd or openrc service ---
service_enable_and_start() {
    [ "${INSTALL_K3S_SKIP_ENABLE}" = true ] && return

    [ "${HAS_SYSTEMD}" = true ] && systemd_enable
    [ "${HAS_OPENRC}" = true ] && openrc_enable

    [ "${INSTALL_K3S_SKIP_START}" = true ] && return

    POST_INSTALL_HASHES=$(get_installed_hashes)
    if [ "${PRE_INSTALL_HASHES}" = "${POST_INSTALL_HASHES}" ]; then
        info 'No change detected so skipping service start'
        return
    fi

    [ "${HAS_SYSTEMD}" = true ] && systemd_start
    [ "${HAS_OPENRC}" = true ] && openrc_start
    return 0
}

# --- re-evaluate args to include env command ---
eval set -- $(escape "${INSTALL_K3S_EXEC}") $(quote "$@")

# --- run the install process --
{
    verify_system
    setup_env "$@"
    download_and_verify
    setup_selinux
    create_symlinks
    create_killall
    create_uninstall
    systemd_disable
    create_env_file
    create_service_file
    service_enable_and_start
}
#----脚本内容结束
```

- 在每台服务器上安装K3S

```sh
INSTALL_K3S_SKIP_DOWNLOAD=true INSTALL_K3S_EXEC='server --datastore-endpoint="mysql://root:root@tcp(10.1.103.171:3306)/k3s" --docker --pause-image="microid.docker.com:5000/rancher/pause:3.1"' ./install.sh
```

- 在每个worker节点上安装k3s

```sh
INSTALL_K3S_SKIP_DOWNLOAD=true INSTALL_K3S_EXEC='agent --datastore-endpoint="mysql://root:root@tcp(10.1.103.171:3306)/k3s" --docker --pause-image="microid.docker.com:5000/rancher/pause:3.1"' K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken ./install.sh
```

> **注意** 请确保用服务器的`IP或有效DNS`替换`myserver`,并用服务器的节点令牌替换`mynodetoken`。节点令牌位于服务器的`/var/lib/rancher/k3s/server/node-token`。

> **注意：** 如果k3s使用外部mysql连接，可能由于k3s这里拼接mysql地址会出现反斜杠`\` ，导致链接失败现象，所以需要手动修改 `/etc/systemd/system/k3s.service` 文件，将 `\` 删掉，如下图所示。

![image-20200526174934213](./img/image-20200526174934213.png)



### 4、检测

```sh
[root@node1 ~]# kubectl get pods --all-namespaces #查看pod，状态正常即可
NAMESPACE           NAME                                                       READY   STATUS             RESTARTS   AGE
default             elk-f6df9c564-4whhz                                        1/1     Running            0          10d
kube-system         metrics-server-7566d596c8-lgjmt                            1/1     Running            0          10d
cattle-prometheus   prometheus-operator-monitoring-operator-695b9b7d89-tp4qs   1/1     Running            0          10d
cattle-prometheus   exporter-kube-state-cluster-monitoring-f8cfddbbb-7d2sn     1/1     Running            0          10d
kube-system         coredns-8655855d6-stfqs                                    1/1     Running            0          10d
agilefast-clound    cms-vue-57c5b55b48-t4hkn                                   1/1     Running            0          10d
cattle-system       rancher-ddb6db556-mbv45                                    1/1     Running            2          10d
agilefast-clound    agilefast-sentinel-dashboard-65fdfc4d7c-nkz88              1/1     Running            0          10d
kube-system         svclb-traefik-gn6qr                                        2/2     Running            4          163d
cattle-system       cattle-cluster-agent-6666b6b47f-nlk9d                      1/1     Running            26         162d
cattle-system       cattle-node-agent-p9zgg                                    1/1     Running            29         162d
cattle-prometheus   exporter-node-cluster-monitoring-d54sr                     1/1     Running            2          162d
cattle-prometheus   prometheus-cluster-monitoring-0                            5/5     Running            1          10d
....
[root@node1 ~]# kubectl get node #获取node 节点
NAME    STATUS   ROLES    AGE    VERSION
node1   Ready    master   163d   v1.18.2-rc2+k3s1
node2   Ready    master   163d   v1.18.2-rc2+k3s1
node5   Ready    master   43d    v1.18.2-rc2+k3s1

```

