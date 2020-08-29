import React from 'react';
import Divider from '@material-ui/core/Divider'


export default class Header extends React.PureComponent{
    
    constructor(props){
        super(props)

        this.state={
           top:document.documentElement.scrollTop,
           className:""
        }
    }
 
    componentDidMount(){
        
        const scrollElement = document.documentElement || document.body

        window.onscroll = ()=>scroll()

        const scroll = (e)=>{
            if (scrollElement.scrollTop > 200) {
                this.setState({
                    className:"dark shadow"
                })
            } else {
                this.setState({
                    className:""
                })
            }
        }

        scroll()
    }

    render(){
        return (
            <header className = {this.state.className}>
                <div className="header__content">
                <div className="brand__name">MyPortfolio</div>
                <div className="menu__icon" style={{display:"none"}}>
                    <svg viewBox="0 0 24 24" style={{height:"32px",cursor:"pointer",zIndex:"99999"}}color="#ffffff" className="css-1a134qk">
                        <g fill="none" stroke="currentColor" strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.5"}>
                            <path d="M2.25 18.003h19.5M2.25 12.003h19.5M2.25 6.003h19.5">
                            </path>
                        </g>
                    </svg>
                </div>
                </div>
            </header>
        )
    }
}