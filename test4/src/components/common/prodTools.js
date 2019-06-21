let prodTools = {};

let store = window.localStorage;
let prods = JSON.parse(store.getItem('prods') || '{}');
// 增加或追加 
prodTools.addOrUpdate = function(p) {
        if (prods[p.id]) {
            prods[p.id] += p.num;
        } else {
            prods[p.id] = p.num;
        }
        // 保存
        this.saveProds(prods);
    }
    // 删除
prodTools.delete = function(id) {
        delete prods[id];
        this.saveProds(prods);
    }
    // 获取
prodTools.getProds = function() {
        return prods;
    }
    // 获取总数
prodTools.getTotalCount = function() {
        let sum = 0;
        for (let id in prods) {
            sum += prods[id];
        }
        return sum;
    }
    // 存储
prodTools.saveProds = function(prods) {
    store.setItem('prods', JSON.stringify(prods));
}
export default prodTools;
