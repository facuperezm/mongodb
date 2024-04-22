import company from '@/models/company'
import { connectToDB } from '@/utils/database'

export const POST = async (req: Request, res: Response) => {
	try {
		const {
			companyName,
			name,
			lastName,
			email,
			password,
			category,
			phoneNumber,
			location
		} = req.body

		await connectToDB()

		const companyExist = await company.findOne({ email })

		if (companyExist) {
			res.status(400)
			throw new Error('Company already exists')
		}

		const newCompany = await company.create({
			companyName,
			name,
			lastName,
			email,
			password,
			category,
			phoneNumber,
			location
		})

		if (newCompany) {
			res.status(201).json({
				_id: newCompany._id,
				companyName: newCompany.companyName,
				name: newCompany.name,
				message: 'Company created successfully'
			})
		} else {
			res.status(400)
			throw new Error('Invalid company data')
		}
		res.status(201).json()
	} catch (error: any) {
		res.status(500).json({ ok: false, message: error.message })
		next(error)
	}
}
