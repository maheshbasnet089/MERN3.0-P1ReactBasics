import Button from "./Button"
import Card from "./Card"



function Test(){
    const data = {
        name : "Manish", 
        age : 22 
    }
    return (
        <>
                <Button huhu={data} haha={1} />
                <Button huhu="Login" haha={2}/>
                <Button huhu="Logout" haha={3}/>
                <Card title="Test Page" />
        </>
    )
}




export default Test