import chefify from '../data/chefify.png'
import chefifyWhite from '../data/chefifywhite.png'
import avatar from '../data/avatar.png'
import checkboxpink from '../data/checkboxpink.png'
import list_item from '../data/list_filter.png'
import checkbox from '../data/checkbox.png'
import sliderTime from '../data/slider.png'
import fiveStart from '../data/rating_5.png'
import fourStart from '../data/rating_4.png'
import threeStart from '../data/rating_3.png'
import twotart from '../data/rating_2.png'
import oneStart from '../data/rating_1.png'
import nothing from '../data/nothing.png'

export default function Home() {
    return <div className="container">
        <div className="grid wide">
            <div className="header">
                <div className="header-left">
                    <img src={chefify} alt=""/>
                    <input type="text" className="header-search" placeholder='cakescacsa'/>
                </div>

                <ul className="nav-list">
                    <li className="nav-item">What to cook</li>
                    <li className="nav-item">Recipes</li>
                    <li className="nav-item">Ingredients</li>
                    <li className="nav-item">Occasions</li>
                    <li className="nav-item">About Us</li>
                </ul>

                <div className='header-right'>
                    <div className="header-mail"><img src={checkboxpink} alt="" />Your Recipe Box</div>
                    <img className='header-avatar' src={avatar} alt=""/>
                </div>
            </div>
        </div>

        <div className="grid wide">
            <div className="content">
                <div className="row">
                    <div className="col l-4">
                        <div className="filter">
                            <h2><img src={list_item} alt="" />FILTERS</h2>
                            <div className='type'>Type<span></span></div>
                            <div className="filter-choice">
                                <ul className="filter-list">
                                    <li className="filter-item"><img src={checkbox} alt="" />Pan-tried</li>
                                    <li className="filter-item"><img src={checkbox} alt="" />Grilled</li>
                                    <li className="filter-item"><img src={checkbox} alt="" />Sautted</li>
                                    <li className="filter-item"><img src={checkbox} alt="" />Steamed</li>
                                </ul>
                                <ul className="filter-list">
                                    <li className="filter-item"><img src={checkbox} alt="" />Stir-tired</li>
                                    <li className="filter-item"><img src={checkbox} alt="" />Roasted</li>
                                    <li className="filter-item"><img src={checkbox} alt="" />Baked</li>
                                    <li className="filter-item"><img src={checkbox} alt="" />Stewed</li>
                                </ul>
                            </div>
                        </div>

                        <div className="time">
                            <h3>Time</h3>
                            <div className='time-value'>
                                <span>30 minutes</span>
                                <span>50 minutes</span>
                            </div>
                            <img src={sliderTime} alt="" />
                        </div>

                        <div className="rating">
                            <h3>Rating</h3>
                                <ul className="filter-list">
                                    <li className="filter-item"><img src={checkbox} alt="" /><img src={fiveStart} alt="" /></li>
                                    <li className="filter-item"><img src={checkbox} alt="" /><img src={fourStart} alt="" /></li>
                                    <li className="filter-item"><img src={checkbox} alt="" /><img src={threeStart} alt="" /></li>
                                    <li className="filter-item"><img src={checkbox} alt="" /><img src={twotart} alt="" /></li>
                                    <li className="filter-item"><img src={checkbox} alt="" /><img src={oneStart} alt="" /></li>
                                </ul>
                        </div>

                        <div className='filter-footer'>
                            <div className='filter-button'>Apply</div>
                        </div>
                    </div>

                    <div className="col l-8">
                        <div className="result">
                            <h1 className='result-log'>Sorry, no result were found for "cakescascsa"</h1>
                            <img src={nothing} alt="" />
                            <span>We have all your independence Day sweets covered</span>
                            <ul className="result-suggest">
                                <li>
                                    <div className="result-suggest_item">Sweet Cake</div>
                                </li>
                                <li>
                                    <div className="result-suggest_item">Black Cake</div>
                                </li>
                                <li>
                                    <div className="result-suggest_item">Pozole Verde</div>
                                </li>
                                <li>
                                    <div className="result-suggest_item">Healthy Food</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="grid wide">
            <footer className='footer'>
                    <div className="row">
                        <div className="l-6">
                            <ul>
                                <li><h4>About Us</h4></li>
                                <li><p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro </p></li>
                                <li><input className='footer_email' type="text" placeholder='Enter your email' /><button className='button-primary'>Send</button></li>
                                <li></li>
                            </ul>

                            <ul className='cheftWhite'>
                                <li><img src={chefifyWhite} alt="" /></li>
                                <li>2023 Chefity Company</li>
                                <li>Terms of Service Privacy Policy</li>
                            </ul>
                        </div>

                        <div className="l-6">
                            <div className="row">
                                <div className="l-6">
                                    <ul>
                                        <li>Learn More</li>
                                        <li>Our Cooks</li>
                                        <li>See Our Features</li>
                                        <li>FAQ</li>
                                    </ul>
                                    <br />
                                    <ul>
                                        <li>Shop</li>
                                        <li>Gift Subscription</li>
                                        <li>Send Us Feedback</li>
                                    </ul>
                                </div>

                                <div className="l-6">
                                    <ul>
                                        <li>Recipes</li>
                                        <li>What to Cook This Week</li>
                                        <li>Pasta</li>
                                        <li>Dinner</li>
                                        <li>Healthy</li>
                                        <li>Vegetarian</li>
                                        <li>Vegan</li>
                                        <li>Christmas</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
        </div>
    </div>
}