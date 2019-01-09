export class Product {
  constructor(

    public category: string,
    public name: string,
    public brand: string,
    public price: number,
    public dateOfManf?: string,
    public dateOfExp?: string

  ) {}
}

