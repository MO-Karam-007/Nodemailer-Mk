exports.validateData = (...params) =>
{
    return (req, res, n) =>
    {
        for (const param of params)
        {
            if (!req.body[param] || req.body[param] === "")
            {
                return res.status(400).json({ error: 'Missing or empty data for ' + param });
            }
        }
        n();


    }
}