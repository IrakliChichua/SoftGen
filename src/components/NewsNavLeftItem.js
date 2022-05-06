import React from 'react';

function NewsNavLeftItem({svg, text, activeTab, setActiveTab, tab}) {
    return (
        <div className={`item ${activeTab === tab && 'active-nav'}`} onClick={() => setActiveTab(tab)}>
            <div className={'top'}>
                <img src={svg} alt=''/>
                <div className={'text'}>{text}</div>
            </div>

            <div className={"active"}/>
        </div>
    );
}

export default NewsNavLeftItem;