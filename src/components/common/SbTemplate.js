import React from 'react'
import { Sidebar } from '../common/Sidebar'
import Header from './Header'

export const SbTemplate = () => {
    return (
        <>
            <div id="wrapper">
                <Sidebar></Sidebar>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header></Header>
                    </div>
                </div>
            </div>
        </>
    )
}
