// import { COLORS } from "../../helpers/colors";
import colors from "colors";

colors.setTheme( {} );

class Computer {
  public cpu: string = "CPU - not defined";
  public ram: string = "RAM - not defined";
  public storage: string = "Storaga - not defined";
  public gpu?: string;

  displayConfiguration (){
    console.log( `The computer configuration is
        CPU: ${this.cpu}
        RAM: ${this.ram}
        Storage: ${this.storage}
        GPU: ${this.gpu}`
    );
  }
}

class ComputerBuilder{
  private computer: Computer;

  constructor (){
    this.computer = new Computer;
  }

  setCPU ( cpu: string ): ComputerBuilder{
    this.computer.cpu = cpu;
    return this;
  }

  setRAM ( ram: string ): ComputerBuilder{
    this.computer.ram = ram;
    return this;
  }

  setStorage ( storage: string ): ComputerBuilder{
    this.computer.storage = storage;
    return this;
  }

  setGPU ( gpu: string ): ComputerBuilder{
    this.computer.gpu = gpu;
    return this;
  }

  build (): Computer{
    return this.computer;
  }

}

function main (){
  const basicComputer: Computer = new ComputerBuilder()
    .setCPU( "Core 2 Duo" )
    .setRAM( "4GB" )
    .setStorage( "128GB" )
    .build();
  console.log( "Basic Computer".red );
  basicComputer.displayConfiguration();

  const ultraComputer: Computer = new ComputerBuilder()
    .setCPU( "Ryzen 5600" )
    .setRAM( "32GB" )
    .setStorage( "2TB" )
    .setGPU( "RTX 5090" )
    .build();
  console.log( "Ultra Computer".green );
  ultraComputer.displayConfiguration();

}

main();