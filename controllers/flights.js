import { Flight } from '../models/flight.js'

export {
    newFlight as new,
    create,
    index,
    show,
    createTicket,
}



function createTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.tickets.push(req.body)
      flight.save(function(err) {
        console.log(flight.tickets.length)
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }



function index (req, res) {
    Flight.find({...req.body}, function(err, flights) {
        res.render('flights/index', {
            err: err,
            flights: flights,
            title: 'Flight List'
        })
    })
}



function newFlight(req, res) {
    res.render('flights/new', {
        title: 'New Flight'
    })
}


function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err) {
          if (err) return res.redirect('/flights/new')
      res.redirect('/flights/')
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
      res.render('flights/show', { 
        title: 'Flight Detail', 
        flight: flight,
      })
    })
}

