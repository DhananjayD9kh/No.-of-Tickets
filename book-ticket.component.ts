import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent  {
  
  
  mult(val: BigInteger){
    console.log(val)
    
  }

  getBookedTicketFormData(data:any)
  {
    console.log(data.source);
    
  
  }

}
