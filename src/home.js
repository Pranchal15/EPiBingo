import React from 'react'
import './home.css'

export default function Home() {

    function tileClick()
    {
        console.log("clicked")
    }
  return (
    <div className='container'>
    <h2>
        Cross out the tiles that you are familiar with
    </h2>
        <table>
            <tr className='t-row'>
                <td className='t-column' onClick={()=>tileClick()}>
                    b1
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b2
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b3
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b4
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b5
                </td>
            </tr>
            <tr className='t-row'>
                <td className='t-column' onClick={()=>tileClick()}>
                    b1
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b2
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b3
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b4
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b5
                </td>
            </tr>
            <tr className='t-row'>
                <td className='t-column' onClick={()=>tileClick()} >
                    b1
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b2
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b3
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b4
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b5
                </td>
            </tr>
            <tr className='t-row'>
                <td className='t-column' onClick={()=>tileClick()}>
                    b1
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b2
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b3
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b4
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b5
                </td>
            </tr>
            <tr className='t-row'>
                <td className='t-column' onClick={()=>tileClick()}>
                    b1
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b2
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b3
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b4
                </td>
                <td className='t-column' onClick={()=>tileClick()}>
                    b5
                </td>
            </tr>

        </table>
    </div>
 
  )
}
