import { FC } from "react";
import * as classes from "./MenuComponent.module.scss"

export const MenuComponent:FC = (props) => {

    return (<div className={classes.menuStyle}>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>)
}