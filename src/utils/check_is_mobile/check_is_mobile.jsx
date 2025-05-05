function CheckIsMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isDevice = /android|iPad|iPhone|iPod/i.test(userAgent.toLowerCase());
    // const isSmallScreen = window.innerWidth <= 768;
    // return isDevice 
    // return true
}

export default CheckIsMobile;