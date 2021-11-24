import '../subheader/Subheader.css'
function Subheader() {
    return (
    <div className="SubheaderBlock">
        <input className="StoreSearchBox" name="term" type="text" class="default" placeholder="Buscar" size="22" autocomplete="off" maxlength="64"></input>
        
    </div>
    )
}
export default Subheader;