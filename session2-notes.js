//Session 2 — How the Internet Works + HTTP Fundamentals

//Task 1 — Network Tab Investigation:

:authority
ebet.co.sz
:method
GET
:path
/

status code: 200 ok

access-control-allow-headers
*
access-control-allow-methods
*
access-control-allow-origin
*
alt-svc
h3=":443"; ma=86400
cache-control
no-store, no-cache, must-revalidate
cf-cache-status
DYNAMIC
cf-ray
a160ae9d08476534-LHR
content-encoding
zstd
content-type
text/html; charset=UTF-8
date
Sat, 04 Jul 2026 19:54:29 GMT
db
3
expires
Thu, 19 Nov 1981 08:52:00 GMT
nel
{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
pragma
no-cache
priority
u=0,i

Response body is an html code of the website


//Task 2 — Map out an API:
GET /orders
POST /orders
PATCH /orders/:id
DELETE /orders/:id
GET /balance
POST /deposit
GET /order/status

//Task 3 — Status Code Quiz (self-test):
User requests a product that doesn't exist - 404
User successfully creates an account - 201
User tries to access admin dashboard but isn't an admin - 403
Something crashes on your server - 500
User sends a form with missing required fields - 301