import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";

const css = {header: '', outlet: '', footer: ''}; // TODO: css

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                {/*<button onClick={logout}>LogOut</button>*/}
            </div>
            <div className={css.outlet}>
                <div>
                    <Outlet/>
                </div>
                <div className={css.footer}>
                    @ReactRouterDom
                </div>
            </div>
        </div>
    );
};

export {Layout}