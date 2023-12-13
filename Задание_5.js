class ElectricAppliance
{
    constructor(name, power)
    {
        this.name = name;
        this.power = power;
        this.isIncluded = false;
    }

    includeIn()
    {
        console.log(this.name + " is isIncluded!");
        this.isIncluded = true;
    }

    getPower()
    {
        return this.isIncluded ? this.power : 0;
    }
}

const laptop = new ElectricAppliance('laptop', 130);
const pc = new ElectricAppliance('pc', 180);

console.log(laptop.getPower() + pc.getPower());

laptop.includeIn();
console.log(laptop.getPower() + pc.getPower());

pc.includeIn();
console.log(laptop.getPower() + pc.getPower());
