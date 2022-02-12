import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {Header} from "../../components";

const css = {header: '', outlet: '', footer: ''}; // TODO: css

const MoviesPage = () => {
    return (
        <div>
            <Header/>
            {/*<div className={css.header}>*/}
            {/*    <NavLink to="/">Home</NavLink>*/}
            {/*    <NavLink to="/users">Users</NavLink>*/}
            {/*    <NavLink to="/posts">Posts</NavLink>*/}
            {/*    <NavLink to="/about">About</NavLink>*/}
            {/*    /!*<button onClick={logout}>LogOut</button>*!/*/}
            {/*</div>*/}
            <div className={'d-flex justify-content-evenly bg-secondary bg-opacity-25'}>
                {/*<div>*/}
                    <Outlet/>
                {/*</div>*/}
                {/*<div className={css.footer}>*/}
                {/*    @ReactRouterDom*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export {MoviesPage}