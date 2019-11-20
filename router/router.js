module.exports = function(app) {
    const menu = require('../controller/controller')
    
    app
        .route("/menu")
        .get(menu.daftarMenu)
        .post(menu.tambahMenu)
        .delete(menu.hapusSemua)
    
    app
        .route("/menu/:menuId")
        .get(menu.pilihMenu)
        .put(menu.ubahMenu)
        .delete(menu.hapusMenu)
}
