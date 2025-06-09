import React from 'react';

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner" style={{ height: '500px' }}>

                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-info" type="submit">Search</button>
                        </form>

                    </div>

                    <div className="carousel-item active">
                        <img
                            src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
                            className="d-block w-100"
                            style={{ height: '500px', objectFit: 'cover', filter: 'brightness(30%)' }}
                            alt="Burger"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg"
                            className="d-block w-100"
                            style={{ height: '500px', objectFit: 'cover', filter: 'brightness(30%)' }}
                            alt="Momos"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*"
                            className="d-block w-100"
                            style={{ height: '500px', objectFit: 'cover', filter: 'brightness(30%)' }}
                            alt="Pizza"
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
