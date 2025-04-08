  const validateTask = (req, res, next) => {
  const { title, description, status, due_date } = req.body;

  if (req.method === 'POST' || req.method === 'PUT') {
    if (!status) {
      return res.status(400).json({ message: 'Status is required' });
    }
  }

  if (due_date && isNaN(Date.parse(due_date))) {
    return res.status(400).json({ message: 'Due date is not valid' });
  }

  if (status && !['pending', 'in-progress', 'completed'].includes(status)) {
    return res.status(400).json({ message: 'Status must be one of: pending, in-progress, completed' });
  }

  next();
};

export default validateTask;
