import React from "react";
import SmartUserTable from "../components/smartusertable";


const Lab7 = () => {
    return (
        <div>
            <h2>Это Лаб 7</h2>
            <p>Внедрить в проект UI Kit Mui/Bootstrap или им подобное, для возможности адаптива.</p>
            <p>Реализовать Header (Главная, О себе) - отдельные страницы. Изменение темы на темную перенести в Header.</p>
            <p>Реализовать Menu (Drawer/Slider) - Меню по прежнему должно открывать список лабораторных, но должно быть скрываемым и вызываться из Header по кнопке-иконке.</p>
            <p>В нижнем меню организовать вызов быстрых действий (обратная связь и пр)</p>
            <SmartUserTable />
        </div>
    );
};
export default Lab7;