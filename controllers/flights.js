import { Flight } from '../models/flight.js'
import { Destination } from '../models/destination.js'

export {
    newFlight as new,
    create,
    index,
    show,
    createTicket,
    addToDestinations,
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
          res.redirect(`/flights/${flight._id}`)
    })
}


function show(req, res) {
  Flight.findById(req.params.id).populate('destinations').exec(function(err, flight) {
    Destination.find({_id: {$nin: flight.destinations}}, function(err, destinations) {
      res.render('flights/show', {
        title: 'Flight Detail', 
        flight: flight,
        destinations: destinations,
				err: err,
      })
    })
  })
}

function addToDestinations(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body.destinationId)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}