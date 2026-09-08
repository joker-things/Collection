function operator(proxies) {
    return proxies.filter((e) => {
        if (!e.name) return false;

        // 含“家宽”的节点始终保留
        if (e.name.includes("家宽")) return true;

        // 检查倍率
        const match = e.name.match(/\b(\d+(?:\.\d+)?)[xX]\b/);

        if (match) {
            const multiplier = parseFloat(match[1]);

            // 非家宽节点中，倍率 > 1 的删除
            if (multiplier > 1) return false;
        }

        return true;
    });
}
