import { text, timestamp, boolean, integer, varchar, index, uniqueIndex, decimal, jsonb } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'

// ============================================================================
// Better Auth Tables (Required)
// ============================================================================

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email').unique(),
  emailVerified: boolean('emailVerified'),
  image: text('image'),
  createdAt: timestamp('createdAt'),
  updatedAt: timestamp('updatedAt'),
})

export const session = pgTable(
  'session',
  {
    id: text('id').primaryKey(),
    expiresAt: timestamp('expiresAt').notNull(),
    token: text('token').notNull().unique(),
    createdAt: timestamp('createdAt'),
    updatedAt: timestamp('updatedAt'),
    ipAddress: text('ipAddress'),
    userAgent: text('userAgent'),
    userId: text('userId').notNull(),
  },
  (table) => ({
    userIdIdx: index('session_userId_idx').on(table.userId),
  })
)

export const account = pgTable(
  'account',
  {
    id: text('id').primaryKey(),
    accountId: text('accountId').notNull(),
    providerId: text('providerId').notNull(),
    userId: text('userId').notNull(),
    accessToken: text('accessToken'),
    refreshToken: text('refreshToken'),
    idToken: text('idToken'),
    expiresAt: timestamp('expiresAt'),
    password: text('password'),
    createdAt: timestamp('createdAt'),
    updatedAt: timestamp('updatedAt'),
  },
  (table) => ({
    userIdIdx: index('account_userId_idx').on(table.userId),
  })
)

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt'),
  updatedAt: timestamp('updatedAt'),
})

// ============================================================================
// Application Tables
// ============================================================================

export const organizations = pgTable(
  'organizations',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    name: text('name').notNull(),
    description: text('description'),
    logo: text('logo'),
    website: text('website'),
    email: text('email'),
    phone: text('phone'),
    address: text('address'),
    state: text('state'),
    city: text('city'),
    foundedYear: integer('foundedYear'),
    type: varchar('type', { length: 50 }), // 'NGO', 'Corporate', 'Government', 'Sports Body'
    focusArea: text('focusArea'), // comma-separated or JSON
    disabilitiesServed: text('disabilitiesServed'),
    sportSupported: text('sportSupported'),
    annualBeneficiaries: integer('annualBeneficiaries'),
    partnerOrganizations: text('partnerOrganizations'),
    collaborationOpportunities: text('collaborationOpportunities'),
    csrBudget: integer('csrBudget'),
    featured: boolean('featured').default(false),
    verified: boolean('verified').default(false),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
  },
  (table) => ({
    userIdIdx: index('organizations_userId_idx').on(table.userId),
    typeIdx: index('organizations_type_idx').on(table.type),
  })
)

export const athletes = pgTable(
  'athletes',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    name: text('name').notNull(),
    bio: text('bio'),
    image: text('image'),
    state: text('state'),
    primarySport: text('primarySport').notNull(),
    sportCategory: text('sportCategory'),
    disabilityCategory: text('disabilityCategory'),
    bornYear: integer('bornYear'),
    careerStatus: varchar('careerStatus', { length: 50 }), // 'Active', 'Retired', 'Rising'
    olympicGold: integer('olympicGold').default(0),
    olympicSilver: integer('olympicSilver').default(0),
    olympicBronze: integer('olympicBronze').default(0),
    asianParaGamesGold: integer('asianParaGamesGold').default(0),
    asianParaGamesSilver: integer('asianParaGamesSilver').default(0),
    asianParaGamesBronze: integer('asianParaGamesBronze').default(0),
    worldChampionshipGold: integer('worldChampionshipGold').default(0),
    worldChampionshipSilver: integer('worldChampionshipSilver').default(0),
    worldChampionshipBronze: integer('worldChampionshipBronze').default(0),
    personalBest: text('personalBest'),
    worldRecordsHeld: integer('worldRecordsHeld').default(0),
    notableAchievements: text('notableAchievements'),
    ambassadorPotential: varchar('ambassadorPotential', { length: 20 }), // 'Very High', 'High', 'Medium'
    communityEngagement: varchar('communityEngagement', { length: 50 }),
    socialMediaFollowers: integer('socialMediaFollowers').default(0),
    keyStrengths: text('keyStrengths'),
    alignmentWithCause: text('alignmentWithCause'),
    featured: boolean('featured').default(false),
    verified: boolean('verified').default(false),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
  },
  (table) => ({
    userIdIdx: index('athletes_userId_idx').on(table.userId),
    sportIdx: index('athletes_primarySport_idx').on(table.primarySport),
    ambassadorIdx: index('athletes_ambassadorPotential_idx').on(table.ambassadorPotential),
  })
)

export const programs = pgTable(
  'programs',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    organizationId: text('organizationId'),
    name: text('name').notNull(),
    description: text('description'),
    category: varchar('category', { length: 50 }), // 'Adaptive Sports', 'Rehabilitation', 'Community Outreach'
    sports: text('sports'),
    ageGroup: text('ageGroup'),
    disabilitiesServed: text('disabilitiesServed'),
    location: text('location'),
    startDate: timestamp('startDate'),
    endDate: timestamp('endDate'),
    capacity: integer('capacity'),
    enrolledCount: integer('enrolledCount').default(0),
    registrationDeadline: timestamp('registrationDeadline'),
    fee: decimal('fee', { precision: 10, scale: 2 }),
    image: text('image'),
    featured: boolean('featured').default(false),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
  },
  (table) => ({
    userIdIdx: index('programs_userId_idx').on(table.userId),
    organizationIdIdx: index('programs_organizationId_idx').on(table.organizationId),
    categoryIdx: index('programs_category_idx').on(table.category),
  })
)

export const registrations = pgTable(
  'registrations',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    programId: text('programId').notNull(),
    status: varchar('status', { length: 20 }), // 'Registered', 'Completed', 'Cancelled'
    registrationDate: timestamp('registrationDate').defaultNow(),
    completedDate: timestamp('completedDate'),
    notes: text('notes'),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
  },
  (table) => ({
    userIdIdx: index('registrations_userId_idx').on(table.userId),
    programIdIdx: index('registrations_programId_idx').on(table.programId),
    statusIdx: index('registrations_status_idx').on(table.status),
  })
)

export const testimonials = pgTable(
  'testimonials',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    name: text('name').notNull(),
    role: text('role'),
    content: text('content').notNull(),
    image: text('image'),
    rating: integer('rating'),
    athleteId: text('athleteId'),
    organizationId: text('organizationId'),
    featured: boolean('featured').default(false),
    published: boolean('published').default(true),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
  },
  (table) => ({
    userIdIdx: index('testimonials_userId_idx').on(table.userId),
    publishedIdx: index('testimonials_published_idx').on(table.published),
  })
)

export const blogPosts = pgTable(
  'blogPosts',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    title: text('title').notNull(),
    slug: varchar('slug', { length: 255 }).unique(),
    excerpt: text('excerpt'),
    content: text('content').notNull(),
    image: text('image'),
    category: varchar('category', { length: 50 }),
    tags: text('tags'),
    author: text('author'),
    published: boolean('published').default(false),
    publishedAt: timestamp('publishedAt'),
    views: integer('views').default(0),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
  },
  (table) => ({
    userIdIdx: index('blogPosts_userId_idx').on(table.userId),
    slugIdx: uniqueIndex('blogPosts_slug_idx').on(table.slug),
    publishedIdx: index('blogPosts_published_idx').on(table.published),
    categoryIdx: index('blogPosts_category_idx').on(table.category),
  })
)

export const events = pgTable(
  'events',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    organizationId: text('organizationId'),
    title: text('title').notNull(),
    description: text('description'),
    eventType: varchar('eventType', { length: 50 }), // 'Competition', 'Workshop', 'Seminar'
    startDate: timestamp('startDate').notNull(),
    endDate: timestamp('endDate'),
    location: text('location'),
    capacity: integer('capacity'),
    registeredCount: integer('registeredCount').default(0),
    image: text('image'),
    featured: boolean('featured').default(false),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
  },
  (table) => ({
    userIdIdx: index('events_userId_idx').on(table.userId),
    startDateIdx: index('events_startDate_idx').on(table.startDate),
  })
)

export const statistics = pgTable(
  'statistics',
  {
    id: text('id').primaryKey(),
    userId: text('userId'),
    key: text('key').notNull(), // 'total_athletes', 'total_programs', etc.
    value: integer('value').notNull(),
    date: timestamp('date').defaultNow(),
    createdAt: timestamp('createdAt').defaultNow(),
  },
  (table) => ({
    keyIdx: index('statistics_key_idx').on(table.key),
    dateIdx: index('statistics_date_idx').on(table.date),
  })
)
