//  define static property to keep all instances
JSAccordion.instances = [];

function JSAccordion(elementOrSelector) {
    if(!(this instanceof JSAccordion))
        return new JSAccordion(elementOrSelector);

    //  define public methods
    this.init=function () {
        var divClass = this.targetElement.querySelector("div[id ^= 'container']");
        divClass.classList.add('jsac-container');

        var ulClass=this.targetElement.querySelector("div>ul");
        ulClass.classList.add('jsac-list');
    };

    //  start construction operations
    //  if parameter is element selector
    if(typeof elementOrSelector == 'string') {
        this.targetElement = document.querySelector(elementOrSelector);
        if(this.targetElement == null) {
            throw ('invalid element selector');
        }
    }
    //  if parameter is element DOM object
    else if(typeof elementOrSelector == 'object')
        this.targetElement = elementOrSelector;
    else
        throw ('Unknown element type');

    //  set autoincrement instance id to object
    this.id = JSAccordion.instances.length;

    JSAccordion.instances.push(this);

    return this;
}

function nicePrint() {
    for (var i in arguments) {
        var temp = arguments[i];
        if (typeof temp == "object") {
            document.write("{ ")
            for (var j in temp) {
                document.write(j + ":" + temp[j]);
                if (j != temp.length - 1) {
                    document.write(" , ");
                }
            }
            document.write(" }")
        } else {
            document.write(temp + " &nbsp; &nbsp; ");
        }
    }
    document.write("<br>");
}


//  define static property to keep all instances
JSAccordion.instances = [];

