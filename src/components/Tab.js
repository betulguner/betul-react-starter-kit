import { useState, useEffect } from "react"

function Tab({ children, activeTab, setActiveTab })
{

    console.log(children)
    const [active, setActive] = useState(activeTab)

    return(
        <div>
            <nav>
                {children.map((tab,index) => 
                        <button 
                            onClick={() => setActiveTab(index)}
                            className = {activeTab == index?'bg-green-100' : 'bg-gray-100'} 
                            key={index}
                            > 
                            {tab.props.title}
                        </button>)}
            </nav>
            {children[activeTab]}
        </div>
    )
}

Tab.Panel = function({ children,title })
{
    return(
        <div>{children} </div>
    )
}

export default Tab 