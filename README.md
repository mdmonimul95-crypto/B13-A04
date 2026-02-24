1 {getElementById( )} *  It can catch or return one element .
                      *  It can catch by id.
                      *  If i use it , i must use quotation (" ") or (' ').
                      *  It works fast . 

  {getElementsByClassName( )} * it can call all element in same class.
                              * It can retun HTMLCollection.
                              * If i add or remove element  , it automatically updates collection.
                              * If i use it , i must use quotation (" ") or (' ').
                              * It can catch by class.

  {querySelector( )} * It can bring element from DOM by using CSS selector.
                     * It gives first matching element.
                     * If i use it by class , i must use at first fullstop in quotation (". ") or ('. ').
                     * If i use it by id , i must use at first # in quotation ("# ") or ('# ').

  {querySelectorAll( )} * It can bring element from DOM by using CSS selector.
                        * it gives all matching element.
                        * It can return NodeList.
                        * It can return static nodelist.
                        * If i use it by class , i must use at first fullstop in quotation (". ") or ('. ').
                        * If i use it by id , i must use at first # in quotation ("# ") or ('# ').


2  At first, I will write code ( let newDiv = document.createElement("div"))
    than, i will add some information ( newDiv.innerText = "Something";)
    than, i will insert in DOM (document.body.append(newDiv);).


3  (Event Bubbling) if i add addEventListener at child in DOM ,it can trigger parent.
                            At first ,it works target element
                            than,it works parent, grandparent , body, document respectively.


4  (Event Delegation) if i add addEventListener at parent  in DOM ,it can trigger child.
     (Why is it useful?) * It can easily handel a chill in DOM 
                         * It can dynamically add element,and it also work fast .
                           

5   {preventDefault( )}  * it can stop default browser behaviour
    {stopPropagation( )} * it can stop event bubbling 
