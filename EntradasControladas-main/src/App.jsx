import React, {useState} from 'react'
function App() {
// Crear un estado llamado miTexto
const[miTexto, setInputValue] = useState('');
// Crear función handleText
const handleInputChange =(event)=> {
const value = event.target.value;
setInputValue(value);
};
return (
<div>
<div>
Capture su texto
</div>
<input
type="text"
value={miTexto}
onChange={handleInputChange}
/>
<h3>Su Texto</h3>
<p>
{miTexto}
</p>
</div>
);
}
export default App;