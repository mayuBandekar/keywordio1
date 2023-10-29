import React, { Component } from 'react';
import Topnavigation from '../layouts/TopNav';
import Content from '../sections/CreateText&Media/CreateText';

const CreateTextMedia = () => {
        return (
            <div style={{width:"100%",position:"fixed",top:"0",zIndex:"999",marginTop:"0px !important"}}>
                <Topnavigation />
                <main className="body-content">
                    <Content/>
                </main>
            </div>
        );
}

export default CreateTextMedia;