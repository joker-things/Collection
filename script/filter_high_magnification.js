function operator(proxies) {
    let arr = [];
    proxies.forEach((e) => {
    const match = e.name.match(/\b(\d+(\.\d+)?)(x|X)\b/g);
    if (match) {
    const rev = match[0].match(/(\d[\d.]*)/)[0];
    const revFloat = parseFloat(rev);
    if (revFloat > 1) {arr.push(e.name)}
    }
    });
    arr.forEach((p) => {
        proxies = proxies.filter((e) => e.name !== p);
    });
    proxies = proxies.filter((e) => e.name !== null);
    return proxies;
}
