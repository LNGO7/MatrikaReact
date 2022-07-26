import Options from './Options' //importing Options.js


const names = []
function OptionBar(){
    return(
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-4" id="values">
                    <h3>Ročník:</h3>
                    <Options array={["",1,2,3,4,5]}/>
                </div>
                <div class="col-sm-4" id="values">
                    <h3>Specializace:</h3>
                    <Options array={["","22-5KB1", "22-5EL1", "22-5S1", "22-5S2", "22-5PIL"]}/>
                </div>
                <div class="col-sm-4" id="values">
                    <h3>Student:</h3>
                    <Options array={["",
                    "Linhart Lukáš",
                    "Tomáš Bradáč", 
                    "Jakub Mencner",
                    "Karolína Mutlova",
                    "Martin Klimeš",
                    "Vratislav Beran"]} />
                </div>
            </div>
        </div>
    )
}

export default OptionBar