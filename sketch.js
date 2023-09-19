function draw() {
    background(0);
    mostraBolinha();
    //movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    //verificaColisaoRaquete();
    colisaoMinhaRaqueteBiblioteca();
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
}