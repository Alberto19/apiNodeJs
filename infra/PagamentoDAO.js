function PagamentoDAO(con) {
    this._con = con;
}

PagamentoDAO.prototype.salva = function(pagamento,callback) {
    this._con.query('INSERT INTO pagamentos SET ?', pagamento, callback);
}

PagamentoDAO.prototype.atualiza = function(pagamento,callback) {
    this._con.query('UPDATE pagamentos SET status = ? where id = ?', [pagamento.status, pagamento.id], callback);
}

PagamentoDAO.prototype.deleta = function(pagamento,callback) {
    this._con.query('DELETE From pagamentos where id = ?', [pagamento.id], callback);
}

PagamentoDAO.prototype.lista = function(callback) {
    this._con.query('select * from pagamentos',callback);
}

PagamentoDAO.prototype.buscaPorId = function (id,callback) {
    this._con.query("select * from pagamentos where id = ?",[id],callback);
}

module.exports = function(){
    return PagamentoDAO;
};
