import React from 'react';

function NewsNavLeftItem({svg, text, activeTab, setActiveTab, tab}) {
    return (
        <div className={`item ${activeTab === tab && 'active-nav'}`} onClick={() => setActiveTab(tab)}>
            <div className={'top'}>
                {svg}
                <div className={'text'}>{text}</div>
            </div>

            <div className={"active"}/>
        </div>
    );
}

export default NewsNavLeftItem;