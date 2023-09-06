import bcrypt from 'bcrypt'

export const comparePassword = async(candidatePassword, hashedPassword) => {
    const isPasswordValid = await bcrypt.compare(candidatePassword, hashedPassword)
    return isPasswordValid
}

export const hashPassword = async (candidatePassword) => {
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(candidatePassword, salt)
    return hashedPassword
}

