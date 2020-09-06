import React from 'react';

export default class Header extends React.Component{
    
    constructor(props){
        super(props)

        this.state={
           top:document.documentElement.scrollTop,
           className:"",
           links:["skills",'my_projects','reviews','questions','contact']
        }
        this.ref=React.createRef();

    } 

    componentDidMount(){
        
        this.scrollElement = document.documentElement || document.body;

        setTimeout(()=>{
            window.onscroll=()=>{
              this.scroll();
           }
           this.scroll();
        },0);   

    }

    activateLinks(){
        this.state.links.forEach((elem)=>{
            const link = document.querySelector(`#${elem}`);
            const linkHref = document.querySelector(`a[href="#${elem}"`);

            if((link.offsetTop)<=this.scrollElement.scrollTop){
                Array.from(document.querySelectorAll('ul li a')).forEach((el)=>{
                    el.classList.remove('active')
                })
                linkHref.classList.add('active');
            } else {
                linkHref.classList.remove('active');
            }

        })

    };

    scroll (e){
        if (document.documentElement.scrollTop > 200) {
            this.setState({
                className:"dark shadow"
            })
        } else {
            this.setState({
                className:""
            })
        }
        this.activateLinks();
    }
   

    render(){

        let click = ()=>{
            document.querySelector('#mylinks').classList.toggle('visible_o')
        }

        return (
            <header className = {this.state.className}>
                <div className="header__content">
                <div className="brand__name d-flex align-items-center">MyPortfolio</div>
                <div className="links">
                    <ul className="align-items-center h-100" id="mylinks" >
                        <li>
                            <a href="#skills">Techonologies</a>
                        </li>
                        <li>
                            <a href="#my_projects">Portfolio</a>
                        </li>
                        <li>
                            <a href="#reviews">Reviews</a>
                        </li>
                        <li>
                            <a href="#questions">Questions</a>
                        </li>
                        <li>
                            <a href="#contact">Contact me</a>
                        </li>
                    </ul>
                </div>
                <div className="menu__icon" onClick={click}>
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