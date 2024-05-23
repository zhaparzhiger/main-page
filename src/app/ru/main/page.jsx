import WelcomeSlider from '@/components/WelcomeSlider/WelcomeSlider';
import ithub from '../../../../public/assets/images/ithub.png'
export default function RuMainPage() {

    return (
        <div>
            <div className="filter__wrapper">
            <WelcomeSlider/>
                <main className="filter__main">
                    <section className="filter__grid__section">
                        <div className="filter__grid__section__container filter___container">
                            <div className="filter__grid__filter__block filter__filter__block">
                                <div className="filter__filter__block__1">
                                    <h1 className="filter__grid__section__header">Список выпускников</h1>
                                    <div className="filter__filter__block__1__buttons__block">
                                        <button id="showDetailsBtn" className="filter__filter__block__1__button">
                                            <img src="./assets/main/icons/arrows.svg" alt="" />
                                            Сортировка
                                        </button>
                                        <div id="detailsBlock" className="filter__sorting-block filter__hidden">
                <div className="filter__sorting-block__gpa">
                    <div className="filter__sorting-block__text">Средний балл</div>
                    <div className="filter__menu-section__row filter__menu-section__row_sort">
                        <div className="filter__menu-section__column filter__menu-section__column_clear">
                            <span className="filter__menu-section__text filter__menu-section__text_clear">
                                БЕЗ СОРТИРОВКИ
                            </span>
                        </div>
                        <div className="filter__menu-section__column">
                            <span className="filter__menu-section__text">ПО ВОЗРАСТАНИЮ</span>
                        </div>
                        <div className="filter__menu-section__column">
                            <span className="filter__menu-section__text">ПО УБЫВАНИЮ</span>
                        </div>
                </div>
                <div className="filter__sorting-block__dateofgraduation">
                    <div className="filter__sorting-block__text">Дата Выпуска</div>
                    <div className="filter__menu-section__row filter__menu-section__row_sort">
                        <div className="filter__menu-section__column filter__menu-section__column_clear">
                            <span className="filter__menu-section__text filter__menu-section__text_clear">
                                БЕЗ СОРТИРОВКИ
                            </span>
                        </div>
                        <div className="filter__menu-section__column">
                            <span className="filter__menu-section__text">ПО ВОЗРАСТАНИЮ</span>
                        </div>
                        <div className="filter__menu-section__column">
                            <span className="filter__menu-section__text">ПО УБЫВАНИЮ</span>
                        </div>
                    </div>
                </div>
                <button className="filter__sorting-block__btn">Применить</button>
                                        </div>
                                        </div>
                                       
                                        <button className="filter__filter__btn">
                                            <img src="./assets/main/icons/tools.svg" alt="" />
                                            Фильтры
                                        </button>
                                        <div className="filter__modal-window-box">
                                            <div className="filter__modal-window-box-container">
                                                <div className="filter__modal_date_title">Год выпуска</div>
                                                <div className="filter__modal_window_dates">
                                                    <div className="filter__modal_window_dates_container">
                                                    
                                                        <button className="filter__dates_btn">Все</button>
                                                        <button className="filter__dates_btn">2021г.</button>
                                                        <button className="filter__dates_btn">2022г.</button>
                                                        <button className="filter__dates_btn">2023г.</button>
                                                        <button className="filter__dates_btn">2024г.</button>
                                                    </div>
                                                </div>
                                                <div className="filter__modal_date_specialize">Специальность</div>
                                                <button className="filter__modal_sort">Выбрать специальность</button>
                                                <button className='filter__modal-find'>Найти</button>
                                            </div>
                                            <div className="filter__modal_sort_window">
                                                <div className="filter__modal_sort_window_container">
                                                    <div className="filter__area">
                                                        06120200 – Системы информационной безопасности
                                                    </div>
                                                    <div className="filter__area">
                                                        04130100 - Менеджмент (по отраслям и областям применения)
                                                    </div>
                                                    <div className="filter__area">
                                                        06130100 - Программное обеспечение (по видам)
                                                    </div>
                                                    <div className="filter__area">
                                                        07130700 - Техническое обслуживание, ремонт и эксплуатация
                                                        электромеханического оборудования (по видам и отраслям)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter__grid__section__menu filter__menu-section">
                                <div className="filter__menu-section__row">
                                    <div className="filter__menu-section__column">
                                        <span className="filter__menu-section__text">СОРТИРОВКА</span>
                                    </div>
                                    <div className="filter__menu-section__column">
                                        <span className="filter__menu-section__text">СПЕЦИАЛИЗАЦИЯ</span>
                                    </div>
                                    <div className="filter__menu-section__column">
                                        <span className="filter__menu-section__text">ГОД</span>
                                    </div>
                                    <div className="filter__menu-section__column">
                                        <span className="filter__menu-section__text">ГОРОД</span>
                                    </div>
                                    <div className="filter__menu-section__column">
                                        <span className="filter__menu-section__text">КОЛЛЕДЖ</span>
                                    </div>
                                    <div className="filter__menu-section__column filter__menu-section__column_clear">
                                        <img className="filter__menu-section__icon" src="assets/main/icons/close.svg" alt="" />
                                        <span className="filter__menu-section__text filter__menu-section__text_clear">
                                            ОЧИСТИТЬ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter__grid__section__cards filter__cards">
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                                <div className="filter__cards__item">
                                    <div className="filter__cards__item__container">
                                        <div className="filter__cards__item__arrow">
                                            <img className="filter__cards__item__arrow__img" src="/assets/images/arrow-up-right.svg" alt="" />
                                        </div>
                                        <div className="filter__cards__item__image">
                                            <img className="filter__cards__item__img" src="/assets/images/man.png" alt="" />
                                        </div>
                                        <div className="filter__cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <script src={"/assets/scripts/mainpage.js"}></script>
        </div>
    );
}
