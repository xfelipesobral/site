import { Outlet } from 'react-router-dom'

export default function Layout() {

    return (
        <div>
            <div className='bg-slate-50 p-2'>
                <p>Cabecalho</p>
            </div>

            <Outlet />

            <p>rodape</p>
        </div>
    )
}