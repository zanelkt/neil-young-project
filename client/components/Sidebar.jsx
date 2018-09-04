import React from 'react'
import lyrics from '../../data/data'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        
            
            <ul>
           <li id="link" key="intro"><Link to={`/song/intro`} replace><a id="span" class="button is-primary">Introduction</a></Link></li>
                {Object.keys(lyrics).map(song => {
                    if(song == 'intro'){
                        return
                    }
                    return (
                    <div>
                   <li key={song}><Link to={`/song/${song}`} replace>
                   <a id="span" class="button is-primary">Song {song}</a>
                   </Link></li>

                </div>)
   
                })}
              
            </ul>    
    )
}

export default Sidebar