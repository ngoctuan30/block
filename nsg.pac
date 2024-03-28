function FindProxyForURL(url, host) {
    // Direct connection for local hosts
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "172.30.117.5", "255.255.252.0") ||
        isInNet(dnsResolve(host), "172.30.116.2", "255.255.252.0") ||
        isInNet(dnsResolve(host), "172.30.116.3", "255.255.252.0")) {
        return "DIRECT";
    }
    function FindProxyForURL(url, host) {
    // Chặn tất cả các URL có chứa phần upload
    if (shExpMatch(url, "*upload*")) {
        return "PROXY 172.30.117.4:3128";
    }

    // Mặc định, cho phép tất cả các yêu cầu khác
    return "DIRECT";
}
    // Proxy for specific domains
    if (shExpMatch(host, "*.facebook.com") ||
        shExpMatch(host, "*.youtube.com")) {
        return "PROXY 172.30.117.4:3128";
    }

    // Proxy for specific URL patterns
    if (shExpMatch(url, "http://intranet.*")) {
        return "PROXY 172.30.117.4:3128";
    }

    // Proxy for specific protocols
    if (url.substring(0, 5) == "http:" ||
        url.substring(0, 4) == "ftp:") {
        return "PROXY 172.30.117.4:3128";
    }

    // Direct connection for all other requests
    return "DIRECT";
}
