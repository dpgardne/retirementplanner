# Retirement Planner

A MEAN application designed to help users better understand the fundamentals behind investing money for a comfortable retirement. Retirement Planner allows users to calculate their anticipated retirement savings at the end of their working career and save a retirement plan.

## Technical features

Retirement Planner leverages secure signon technology with jsonwebtoken and bcrypt. The app utilizes the power of AngularJS to accurately calculate investment returns and saves data to MongoDB.

##Investment formula

Funds are calculate through the FV of annuities based on the S&P annualized historical 9.8% return. The formula to calculate ending retirement is FVoa = PMT [((1 + i)^n - 1) / i]. To learn more information about the formula please visit

[Get Objects](http://www.getobjects.com/Components/Finance/TVM/fva.html)

####In code this looks like:

```
(Math.pow(1 + (.06/12), (this.num2 * 12)) - 1) / 0.005 * this.num3 + (Math.pow(1 + (.06/12), (this.num2 * 12)) * this.num1)
```

####Acknowledgement and citation
I'd like to cite and thank David Acosta's wonderfully created YouTube series that greatly helped in creating the secure login portion of the website.
[David Acosta](https://www.youtube.com/watch?v=-gd73iczlS8&list=PL3vQyqzqjZ637sWpKvniMCxdqZhnMJC1d)

####By David Gardner 2017
