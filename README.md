# Authentication
## Security rules
- security rules !== client side validation

**Note**: Done in custom language => **ultra performant**

- Matching: 
match >collection/doc {

}
- all matches run at document level => So how do you secure a whole collection? => trough the usage of **wildcards**

- Matching: 
match >users/{uid} {

}