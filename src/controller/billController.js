import billService from '../services/billService'

const getBill = async (req, res) => {
    try {
        let data = await billService.getBill(req);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

const createBill = async (req, res) => {
    try {
        let data = await billService.createBill(req);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

const deleteBill = async (req, res) => {
    try {
        let data = await billService.deleteBill(req);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

const updateBill = async (req, res) => {
    try {
        let data = await billService.updateBill(req);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}
const updateStatusBill = async (req, res) => {
    try {
        let data = await billService.updateStatusBill(req);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

const getStatus = async (req, res) => {
    try {
        let data = await billService.getStatus(req);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

const createStatus = async (req, res) => {
    try {
        let data = await billService.createStatus(req);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

const updateStatus = async (req, res) => {
    try {
        let data = await billService.updateStatus(req);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

const deleteStatus = async (req, res) => {
    try {
        let data = await billService.deleteStatus(req);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getBill,
    createBill,
    deleteBill,
    updateBill,
    getStatus,
    createStatus,
    updateStatus,
    deleteStatus,
    updateStatusBill
}