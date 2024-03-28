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
    // Kiểm tra xem URL hoặc tên miền có chứa từ khóa "upload" không
    if (isKeywordMatch(host, "upload") || isKeywordMatch(url, "upload")) {
        // Nếu có, chuyển hướng qua proxy
        return "PROXY 172.30.117.4:3128";
    }
}
// Hàm kiểm tra xem chuỗi có chứa từ khóa không
function isKeywordMatch(str, keyword) {
    return str.indexOf(keyword) !== -1;
}

    function FindProxyForURL(url, host) {
    // Kiểm tra xem yêu cầu có sử dụng phương thức POST không
    if (isPostRequest(url)) {
        // Nếu yêu cầu sử dụng phương thức POST, chuyển hướng qua proxy
        return "PROXY 172.30.117.4:3128";
    }
}

// Hàm kiểm tra nếu yêu cầu sử dụng phương thức POST
function isPostRequest(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);  // Thử mở kết nối POST đồng bộ (false)
    xhr.send();  // Gửi yêu cầu
    return (xhr.readyState == 4);  // Trả về true nếu yêu cầu hoàn thành (trạng thái 4)
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
        url.substring(0, 6) == "https:" ||
        url.substring(0, 4) == "ftp:") {
        return "PROXY 172.30.117.4:3128";
    }

    // Direct connection for all other requests
    return "DIRECT";
}
