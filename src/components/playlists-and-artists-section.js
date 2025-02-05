class PlaylistsAndArtistsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="playlists-container">
                <div id="result-playlists">
                    <h1 id="greeting">Bem vindo!</h1>
                    <h2 class="section">Navegue por todas as seções</h2>
                </div>
                <div id="result-artist" class="hidden">
                    <div class="grid-container">
                        <div class="artist-card" id="">
                            <div class="card-img">
                                <img id="artist-img" class="artist-img" />
                                <div class="play">
                                    <span class="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div class="card-text">
                                <a title="Foo Fighters" class="vst" href=""></a>
                                <span class="artist-name" id="artist-name"></span>
                                <span class="artist-categorie">Artista</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="offer__scroll-container">
                    <div class="offer__list">
                        <section class="offer__list-item">
                        <!-- CARD 1 -->
                            <a href="" class="cards">
                                <div class="cards card1">
                                    <img src="./src/assets/imgs/1.jpeg" alt="" />
                                    <span>Boas festas</span>
                                </div>
                            </a>
                            <!-- CARD 2 -->
                            <a href="" class="cards">
                                <div class="cards card2">
                                    <img src="./src/assets/imgs/2.png" alt="" />
                                    <span>Feitos para você</span>
                                </div>
                            </a>
                            <!-- CARD 3 -->
                            <a href="" class="cards">
                                <div class="cards card3">
                                    <img src="./src/assets/imgs/3.jpeg" alt="" />
                                    <span>Lançamentos</span>
                                </div>
                            </a>
                            <!-- CARD 4 -->
                            <a href="" class="cards">
                                <div class="cards card4">
                                    <img src="./src/assets/imgs/4.jpeg" alt="" />
                                    <span>Creators</span>
                                </div>
                                </a>
                                <!-- CARD 5 -->
                            <a href="" class="cards">
                                <div class="cards card5">
                                    <img src="./src/assets/imgs/5.jpeg" alt="" />
                                    <span>Para treinar</span>
                                </div>
                            </a>
                            <!-- CARD 6 -->
                            <a href="" class="cards">
                                <div class="cards card6">
                                    <img src="./src/assets/imgs/6.jpeg" alt="" />
                                    <span>Podcasts</span>
                                </div>
                            </a>
                            <!-- CARD 7 -->
                            <a href="" class="cards">
                                <div class="cards card7">
                                    <img src="./src/assets/imgs/7.jpeg" alt="" />
                                    <span>Sertanejo</span>
                                </div>
                            </a>
                            <!-- CARD 8 -->
                            <a href="" class="cards">
                                <div class="cards card8">
                                <img src="./src/assets/imgs/8.jpeg" alt="" />
                                <span>Samba e pagode</span>
                            </div>
                            </a>
                            <!-- CARD 9 -->
                            <a href="" class="cards">
                                <div class="cards card9">
                                    <img src="./src/assets/imgs/9.jpeg" alt="" />
                                    <span>Funk</span>
                                </div>
                            </a>
                            <!-- CARD 10 -->
                            <a href="" class="cards">
                                <div class="cards card10">
                                    <img src="./src/assets/imgs/10.jpeg" alt="" />
                                    <span>MPB</span>
                                </div>
                            </a>
                            <!-- CARD 11 -->
                            <a href="" class="cards">
                                <div class="cards card11">
                                    <img src="./src/assets/imgs/11.jpeg" alt="" />
                                    <span>Rock</span>
                                </div>
                            </a>
                            <!-- CARD 12 -->
                            <a href="" class="cards">
                                <div class="cards card12">
                                    <img src="./src/assets/imgs/12.jpeg" alt="" />
                                    <span>Hip Hop</span>
                                </div>
                            </a>
                            <!-- CARD 13 -->
                            <a href="" class="cards">
                                <div class="cards card13">
                                    <img src="./src/assets/imgs/13.jpeg" alt="" />
                                    <span>Indie</span>
                                </div>
                            </a>
                            <!-- CARD 14 -->
                            <a href="" class="cards">
                                <div class="cards card14">
                                    <img src="./src/assets/imgs/14.jpeg" alt="" />
                                    <span>Relax</span>
                                </div>
                            </a>
                            <!-- CARD 15 -->
                            <a href="" class="cards">
                                <div class="cards card15">
                                    <img src="./src/assets/imgs/15.jpeg" alt="" />
                                    <span>Música Latina</span>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
            </div>    
            `
    }
}

customElements.define('playlists-and-artists-section', PlaylistsAndArtistsSection);