import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    // template:`
    // <nav>
    //     <ul>
    //         <li>
    //             <a href="/">Home</a>
    //         </li>
    //         <li>
    //             <a href="/">About</a>
    //         </li>
    //         <li>
    //             <a href="/">Login</a>
    //         </li>
    //     </ul>
    // </nav>
    // `,
    styleUrls:['./header.component.css']
    // styles:[
    //     `nav{
    //         background-color: black;
    //     }`,
    //     `nav ul li{ 
    //         padding:20px;
    //         color: white;
    //         display: inline-block;
    //     }`,
    //     `nav ul li a{
    //         color: white;
    //         text-decoration: none;
    //     }`]
})

export class HeaderComponent{

}