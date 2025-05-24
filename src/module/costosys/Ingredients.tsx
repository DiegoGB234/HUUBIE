import SideBar from "./components/SideBar.tsx"
function Ingredientes(){
    return (
    <div className="absolute top-0 left-0 right-0 bottom-0 " style={{backgroundColor:"#1F2E3F"}}>
         <SideBar/>
         <div className=" top-122 left-230">
                <table className="border-collapse border border-gray-400 ...">
                    <thead>
                        <tr>
                        <th className="border border-gray-300 ...">State</th>
                        <th className="border border-gray-300 ...">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border border-gray-300 ...">Indiana</td>
                        <td className="border border-gray-300 ...">Indianapolis</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 ...">Ohio</td>
                        <td className="border border-gray-300 ...">Columbus</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 ...">Michigan</td>
                        <td className="border border-gray-300 ...">Detroit</td>
                        </tr>
                    </tbody>
                </table>
         </div>
    </div>
    )
}
export default Ingredientes 