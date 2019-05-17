//  define static property to keep all instances
JSAccordion.instances = [];

function JSAccordion(elementOrSelector) {
    if(!(this instanceof JSAccordion))
        return new JSAccordion(elementOrSelector);

    //  define public methods
    this.init=function () {
        this.targetElement.classList.add('jsac-container');
        var ulClass=this.targetElement.querySelector("ul");
        ulClass.classList.add('jsac-list');

        var liClass = ulClass.querySelectorAll('li');
        liClass.forEach(function (element) {
            var headerClass=element.querySelector("div:nth-child(1)");
            var spanClass=headerClass.querySelector('span');
            var bodyClass=element.querySelector("div:nth-child(2)");

            element.classList.add('jsac-list');
            headerClass.classList.add('jsac-header');
            spanClass.classList.add('jsac-status-icon');
            bodyClass.classList.add('jsac-body');

            function replaceFunc() {
                element.setAttribute('class', element.className.replace('expanded','collapsed'));
                element.setAttribute('class', element.className.replace('collapsed','expanded'));
            }

            headerClass.addEventListener('click', replaceFunc , false);

        });


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

