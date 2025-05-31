import { promises as fs } from 'fs'
import { join, relative, dirname } from 'path'

// This script copies all images from the content directory to the public/assets directory
// The images can be then served as static assets in the Nuxt application

async function exists(path: string) {
    try {
        await fs.access(path)
        return true
    } catch {
        return false
    }
}

async function copyPngFiles(sourcePath: string, targetPath: string) {
    try {
        const entries = await fs.readdir(sourcePath, { withFileTypes: true })

        for (const entry of entries) {
            const srcPath = join(sourcePath, entry.name)

            if (entry.isDirectory()) {
                await copyPngFiles(srcPath, targetPath)
            } else if (entry.name.toLowerCase().endsWith('.png')) {
                const relPath = relative('./content', srcPath)
                const destPath = join(targetPath, "assets/", entry.name)

                await fs.mkdir(dirname(destPath), { recursive: true })
                await fs.copyFile(srcPath, destPath)
                console.log(`✓ Asset copied: ${relPath}`)
            }
        }
    } catch (error) {
        console.error('❌ Error copying assets:', error)
    }
}

export default defineNitroPlugin(async () => {
    const contentDir = './content'
    const outputDir = './public'

    if (await exists(contentDir)) {
        console.log('📁 Starting asset migration...')
        await copyPngFiles(contentDir, outputDir)
        console.log('✨ Asset migration complete')
    }
})
